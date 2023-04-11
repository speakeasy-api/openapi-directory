import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1BusinessusersIdRequest extends SpeakeasyBase {
    businessUserUpdateModel?: shared.BusinessUserUpdateModel;
    id: string;
}
export declare class PutSetupV1BusinessusersIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    businessUserViewModel?: shared.BusinessUserViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
