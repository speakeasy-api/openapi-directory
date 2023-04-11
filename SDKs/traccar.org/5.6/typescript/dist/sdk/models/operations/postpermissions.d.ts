import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    permission?: shared.Permission;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
