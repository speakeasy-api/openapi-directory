import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShowServiceOfferingNodeRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: string;
}
export declare class ShowServiceOfferingNodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found
     */
    errorNotFound?: shared.ErrorNotFound;
    /**
     * ServiceOfferingNode info
     */
    serviceOfferingNode?: shared.ServiceOfferingNode;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
