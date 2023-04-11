import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1BusinessusersResponse extends SpeakeasyBase {
    /**
     * Success
     */
    businessUserViewModel?: shared.BusinessUserViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
