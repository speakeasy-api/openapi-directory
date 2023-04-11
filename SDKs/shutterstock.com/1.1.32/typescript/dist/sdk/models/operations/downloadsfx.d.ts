import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadSfxSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DownloadSfxRequest extends SpeakeasyBase {
    /**
     * License ID
     */
    id: string;
}
export declare class DownloadSfxResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sfxUrl?: shared.SfxUrl;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
