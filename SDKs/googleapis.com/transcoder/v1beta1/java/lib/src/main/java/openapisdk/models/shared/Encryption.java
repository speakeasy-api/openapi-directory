package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Encryption
 * Encryption settings.
**/
public class Encryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aes128")
    public Aes128Encryption aes128;
    public Encryption withAes128(Aes128Encryption aes128) {
        this.aes128 = aes128;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iv")
    public String iv;
    public Encryption withIv(String iv) {
        this.iv = iv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Encryption withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpegCenc")
    public MpegCommonEncryption mpegCenc;
    public Encryption withMpegCenc(MpegCommonEncryption mpegCenc) {
        this.mpegCenc = mpegCenc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleAes")
    public SampleAesEncryption sampleAes;
    public Encryption withSampleAes(SampleAesEncryption sampleAes) {
        this.sampleAes = sampleAes;
        return this;
    }
}