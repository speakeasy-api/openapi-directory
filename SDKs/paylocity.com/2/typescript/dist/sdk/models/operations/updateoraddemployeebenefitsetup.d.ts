import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateOrAddEmployeeBenefitSetupSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class UpdateOrAddEmployeeBenefitSetupRequest extends SpeakeasyBase {
    /**
     * BenefitSetup Model
     */
    benefitSetup: shared.BenefitSetup;
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class UpdateOrAddEmployeeBenefitSetupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
