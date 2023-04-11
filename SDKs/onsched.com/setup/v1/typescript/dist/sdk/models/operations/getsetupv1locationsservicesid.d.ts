import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1LocationsServicesIdRequest extends SpeakeasyBase {
    /**
     * id of locationService object
     */
    id: string;
}
export declare class GetSetupV1LocationsServicesIdResponse extends SpeakeasyBase {
    /**
     * location service objects
     */
    businessServiceViewModel?: shared.BusinessServiceViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
