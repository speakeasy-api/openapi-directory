import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppliedInventoriesTagsForServiceOfferingRequest extends SpeakeasyBase {
    /**
     * Parameters defining input data for computing inventories
     */
    appliedInventoriesParametersServicePlan: shared.AppliedInventoriesParametersServicePlan;
    /**
     * ID of the resource
     */
    id: string;
}
export declare class AppliedInventoriesTagsForServiceOfferingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns an array of inventories tags for the computing result
     */
    tags?: shared.Tag[];
}
