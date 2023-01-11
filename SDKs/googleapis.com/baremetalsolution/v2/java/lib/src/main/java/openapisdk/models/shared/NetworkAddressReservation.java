package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkAddressReservation
 * A reservation of one or more addresses in a network.
**/
public class NetworkAddressReservation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endAddress")
    public String endAddress;
    public NetworkAddressReservation withEndAddress(String endAddress) {
        this.endAddress = endAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public NetworkAddressReservation withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startAddress")
    public String startAddress;
    public NetworkAddressReservation withStartAddress(String startAddress) {
        this.startAddress = startAddress;
        return this;
    }
}