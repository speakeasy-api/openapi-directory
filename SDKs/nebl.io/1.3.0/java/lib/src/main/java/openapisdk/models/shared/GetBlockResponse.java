package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBlockResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bits")
    public String bits;
    public GetBlockResponse withBits(String bits) {
        this.bits = bits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmations")
    public Double confirmations;
    public GetBlockResponse withConfirmations(Double confirmations) {
        this.confirmations = confirmations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("difficulty")
    public Double difficulty;
    public GetBlockResponse withDifficulty(Double difficulty) {
        this.difficulty = difficulty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public GetBlockResponse withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public GetBlockResponse withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merkleroot")
    public String merkleroot;
    public GetBlockResponse withMerkleroot(String merkleroot) {
        this.merkleroot = merkleroot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextblockhash")
    public String nextblockhash;
    public GetBlockResponse withNextblockhash(String nextblockhash) {
        this.nextblockhash = nextblockhash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonce")
    public Double nonce;
    public GetBlockResponse withNonce(Double nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previousblockhash")
    public String previousblockhash;
    public GetBlockResponse withPreviousblockhash(String previousblockhash) {
        this.previousblockhash = previousblockhash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reward")
    public Double reward;
    public GetBlockResponse withReward(Double reward) {
        this.reward = reward;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Double size;
    public GetBlockResponse withSize(Double size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Double time;
    public GetBlockResponse withTime(Double time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tx")
    public String[] tx;
    public GetBlockResponse withTx(String[] tx) {
        this.tx = tx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Double version;
    public GetBlockResponse withVersion(Double version) {
        this.version = version;
        return this;
    }
}