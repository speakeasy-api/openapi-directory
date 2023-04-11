import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImagesResponseData extends SpeakeasyBase {
    b64Json?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ImagesResponse extends SpeakeasyBase {
    created: number;
    data: ImagesResponseData[];
}
