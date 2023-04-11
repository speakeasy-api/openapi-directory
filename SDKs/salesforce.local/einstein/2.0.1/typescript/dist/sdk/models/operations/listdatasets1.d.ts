import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDatasets1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class ListDatasets1Request extends SpeakeasyBase {
    /**
     * Number of datsets to return. Maximum valid value is 25. If you specify a number greater than 25, the call returns 25 datasets.
     */
    count?: string;
    /**
     * If true, returns all global datasets. Global datasets are public datasets that Salesforce provides.
     */
    global?: boolean;
    /**
     * Index of the dataset from which you want to start paging
     */
    offset?: string;
}
export declare class ListDatasets1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    datasetList?: shared.DatasetList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
