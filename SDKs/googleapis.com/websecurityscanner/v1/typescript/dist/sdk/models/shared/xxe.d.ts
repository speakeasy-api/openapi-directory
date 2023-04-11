import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location within the request where the payload was placed.
 */
export declare enum XxePayloadLocationEnum {
    LocationUnspecified = "LOCATION_UNSPECIFIED",
    CompleteRequestBody = "COMPLETE_REQUEST_BODY"
}
/**
 * Information reported for an XXE.
 */
export declare class Xxe extends SpeakeasyBase {
    /**
     * Location within the request where the payload was placed.
     */
    payloadLocation?: XxePayloadLocationEnum;
    /**
     * The XML string that triggered the XXE vulnerability. Non-payload values might be redacted.
     */
    payloadValue?: string;
}
