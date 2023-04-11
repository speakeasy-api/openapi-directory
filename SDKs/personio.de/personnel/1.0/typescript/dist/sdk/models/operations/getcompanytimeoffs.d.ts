import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompanyTimeOffsRequest extends SpeakeasyBase {
    /**
     * A list of Personio employee identifiers to filter the results. Only those employees specified here will be returned.
     */
    employees?: number[];
    /**
     * Last day of the period to be queried. It is inclusive, so the day specified as end_date will also be considered on the results.
     */
    endDate?: Date;
    /**
     * Pagination attribute to limit how many attendances will be returned per page
     */
    limit?: number;
    /**
     * Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.
     */
    offset?: number;
    /**
     * First day of the period to be queried. It is inclusive, so the day specified as start_date will also be considered on the results
     */
    startDate?: Date;
    /**
     * Datetime from when the queried periods have been updated. It is inclusive, so the day specified as updated_from will also be considered on the results.
     */
    updatedFrom?: string;
    /**
     * Datetime until when the queried periods have been updated. It is inclusive, so the day specified as updated_to will also be considered on the results.
     */
    updatedTo?: string;
}
export declare class GetCompanyTimeOffsResponse extends SpeakeasyBase {
    absencePeriodsResponse?: shared.AbsencePeriodsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
