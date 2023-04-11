import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcesIdServicesRequest extends SpeakeasyBase {
    /**
     * Array of valid service object id's
     */
    requestBody?: string[];
    /**
     * id of resource object
     */
    id: string;
}
export declare class PutSetupV1ResourcesIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
