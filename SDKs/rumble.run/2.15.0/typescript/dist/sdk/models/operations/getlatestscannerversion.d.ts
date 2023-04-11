import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLatestScannerVersionResponse extends SpeakeasyBase {
    /**
     * component version
     */
    componentVersion?: shared.ComponentVersion;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
