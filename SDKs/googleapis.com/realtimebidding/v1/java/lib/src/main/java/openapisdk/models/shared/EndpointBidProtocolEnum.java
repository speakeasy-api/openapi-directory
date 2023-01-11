package openapisdk.models.shared;


public enum EndpointBidProtocolEnum {
    BID_PROTOCOL_UNSPECIFIED("BID_PROTOCOL_UNSPECIFIED"),
    GOOGLE_RTB("GOOGLE_RTB"),
    OPENRTB_JSON("OPENRTB_JSON"),
    OPENRTB_PROTOBUF("OPENRTB_PROTOBUF"),
    OPENRTB22("OPENRTB_2_2"),
    OPENRTB23("OPENRTB_2_3"),
    OPENRTB_PROTOBUF23("OPENRTB_PROTOBUF_2_3"),
    OPENRTB24("OPENRTB_2_4"),
    OPENRTB_PROTOBUF24("OPENRTB_PROTOBUF_2_4"),
    OPENRTB25("OPENRTB_2_5"),
    OPENRTB_PROTOBUF25("OPENRTB_PROTOBUF_2_5");

    public final String value;

    private EndpointBidProtocolEnum(String value) {
        this.value = value;
    }
}
