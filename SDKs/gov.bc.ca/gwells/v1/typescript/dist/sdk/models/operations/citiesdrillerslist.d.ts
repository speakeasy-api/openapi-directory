import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CitiesDrillersListResponse extends SpeakeasyBase {
    cityLists?: shared.CityList[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
