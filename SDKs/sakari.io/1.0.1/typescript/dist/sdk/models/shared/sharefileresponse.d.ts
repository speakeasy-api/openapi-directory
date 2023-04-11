import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShareFileResponseData extends SpeakeasyBase {
    expires?: Date;
    link?: string;
}
/**
 * successful operation
 */
export declare class ShareFileResponse extends SpeakeasyBase {
    data?: ShareFileResponseData;
    success?: boolean;
}
