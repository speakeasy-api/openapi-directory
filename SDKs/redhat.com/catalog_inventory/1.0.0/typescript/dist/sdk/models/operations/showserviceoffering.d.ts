import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShowServiceOfferingRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: string;
}
export declare class ShowServiceOfferingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found
     */
    errorNotFound?: shared.ErrorNotFound;
    /**
     * ServiceOffering info
     */
    serviceOffering?: shared.ServiceOffering;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
