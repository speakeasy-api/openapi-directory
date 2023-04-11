import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatusByUuidSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetStatusByUuidRequest extends SpeakeasyBase {
    importUuid: string;
    organizationUuid: string;
}
export declare class GetStatusByUuidResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Import status
     */
    importResponse?: shared.ImportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
