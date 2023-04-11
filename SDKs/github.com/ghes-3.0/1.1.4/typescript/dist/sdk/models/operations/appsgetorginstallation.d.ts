import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsGetOrgInstallationRequest extends SpeakeasyBase {
    org: string;
}
export declare class AppsGetOrgInstallationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    installation?: shared.Installation;
}
