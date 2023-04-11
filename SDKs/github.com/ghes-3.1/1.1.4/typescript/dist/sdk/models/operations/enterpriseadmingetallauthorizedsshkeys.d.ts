import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminGetAllAuthorizedSshKeysServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminGetAllAuthorizedSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    sshKeys?: shared.SshKey[];
}
