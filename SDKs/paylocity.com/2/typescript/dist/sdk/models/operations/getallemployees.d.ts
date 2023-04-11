import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllEmployeesSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetAllEmployeesRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.
     */
    includetotalcount?: boolean;
    /**
     * Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.
     */
    pagenumber?: number;
    /**
     * Number of records per page. Default value is 25.
     */
    pagesize?: number;
}
export declare class GetAllEmployeesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully Retrieved
     */
    employeeInfos?: shared.EmployeeInfo[];
    /**
     * The company does not exist
     */
    errors?: shared.ErrorT[];
}
