import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateUserInGroupRequestBodyProfile extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    login?: string;
}
export declare class CreateUserInGroupRequestBody extends SpeakeasyBase {
    groupIds?: string[];
    profile?: CreateUserInGroupRequestBodyProfile;
}
export declare class CreateUserInGroupRequest extends SpeakeasyBase {
    requestBody?: CreateUserInGroupRequestBody;
    activate?: string;
}
export declare class CreateUserInGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
