import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ThreeContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000",
    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}
/**
 * Details of the Websocket you want to connect to
 */
export declare class ThreeHeaders extends SpeakeasyBase {
    /**
     * This is an example header. You can provide any headers you may need
     */
    customerId?: string;
}
/**
 * Connect to a Websocket
 */
export declare class Three extends SpeakeasyBase {
    contentType: ThreeContentTypeEnum;
    /**
     * Details of the Websocket you want to connect to
     */
    headers?: ThreeHeaders;
    /**
     * The type of connection. Must be `websocket`
     */
    type: string;
    uri?: string;
}
