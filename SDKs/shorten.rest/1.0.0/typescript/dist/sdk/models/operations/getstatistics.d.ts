import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatisticsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetStatisticsResponse extends SpeakeasyBase {
    /**
     * returns Array of Click models, also returns lastId
     */
    clickModelPg?: shared.ClickModelPg;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
