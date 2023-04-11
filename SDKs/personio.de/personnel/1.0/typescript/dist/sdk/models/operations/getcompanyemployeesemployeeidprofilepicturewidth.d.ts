import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest extends SpeakeasyBase {
    /**
     * Numeric `id` of the employee
     */
    employeeId: number;
    /**
     * Width of the image. Default 75x75
     */
    width: number;
}
export declare class GetCompanyEmployeesEmployeeIdProfilePictureWidthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getCompanyEmployeesEmployeeIdProfilePictureWidth200ImagePngBinaryString?: Uint8Array;
}
