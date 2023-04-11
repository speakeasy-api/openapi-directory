import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1BusinessusersIdRequest extends SpeakeasyBase {
    /**
     * id of businessUser object
     */
    id: string;
}
export declare class GetSetupV1BusinessusersIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    businessUserViewModel?: shared.BusinessUserViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
