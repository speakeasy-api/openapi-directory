import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkMerakiAuthUserRequest extends SpeakeasyBase {
    merakiAuthUserId: string;
    networkId: string;
}
export declare class DeleteNetworkMerakiAuthUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
