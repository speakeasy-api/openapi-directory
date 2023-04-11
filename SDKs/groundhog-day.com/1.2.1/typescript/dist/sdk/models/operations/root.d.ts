import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Root200ApplicationJSONLinksGroundhog extends SpeakeasyBase {
    href: string;
}
export declare class Root200ApplicationJSONLinksGroundhogs extends SpeakeasyBase {
    href: string;
}
export declare class Root200ApplicationJSONLinksPredictions extends SpeakeasyBase {
    href: string;
}
export declare class Root200ApplicationJSONLinksSelf extends SpeakeasyBase {
    href: string;
}
export declare class Root200ApplicationJSONLinksSpec extends SpeakeasyBase {
    href: string;
}
export declare class Root200ApplicationJSONLinks extends SpeakeasyBase {
    groundhog?: Root200ApplicationJSONLinksGroundhog;
    groundhogs?: Root200ApplicationJSONLinksGroundhogs;
    predictions?: Root200ApplicationJSONLinksPredictions;
    self?: Root200ApplicationJSONLinksSelf;
    spec?: Root200ApplicationJSONLinksSpec;
}
/**
 * OK
 */
export declare class Root200ApplicationJSON extends SpeakeasyBase {
    links?: Root200ApplicationJSONLinks;
    message: string;
}
export declare class RootResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    root200ApplicationJSONObject?: Root200ApplicationJSON;
}
