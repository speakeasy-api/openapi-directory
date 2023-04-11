import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationUserRequest extends SpeakeasyBase {
    organizationId: string;
    userId: string;
}
export declare class DeleteOrganizationUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
