import { SpeakeasyBase } from "../../../internal/utils";
export declare class Attachment extends SpeakeasyBase {
    /**
     * The content of the extra merchant data should be presented as a string inside this property. The body should be an object containing any of the keys and sub-objects described below serialized to JSON. More information on that object can be found [here](https://developers.klarna.com/api/#attachment-schema).
     */
    body: string;
    /**
     * The content type of the body. It is usually represented as "application/vnd.klarna.internal.emd-v2+json"
     */
    contentType: string;
}
