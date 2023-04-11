import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
/**
 * Input only. The Request of the CreateCompany method.
 */
export declare class CreateCompanyRequest extends SpeakeasyBase {
    /**
     * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
     */
    company?: Company;
}
