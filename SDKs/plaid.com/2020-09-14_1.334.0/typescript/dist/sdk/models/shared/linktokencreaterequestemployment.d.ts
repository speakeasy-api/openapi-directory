import { SpeakeasyBase } from "../../../internal/utils";
import { EmploymentSourceTypeEnum } from "./employmentsourcetypeenum";
import { LinkTokenCreateRequestEmploymentBankIncome } from "./linktokencreaterequestemploymentbankincome";
/**
 * Specifies options for initializing Link for use with the Employment product. This field is required if `employment` is included in the `products` array.
 */
export declare class LinkTokenCreateRequestEmployment extends SpeakeasyBase {
    /**
     * Specifies options for initializing Link for use with Bank Employment. This field is required if `employment` is included in the `products` array and `bank` is specified in `employment_source_types`.
     */
    bankEmployment?: LinkTokenCreateRequestEmploymentBankIncome;
    /**
     * The types of source employment data that users will be permitted to share. Options include `bank` and `payroll`. Currently you can only specify one of these options.
     */
    employmentSourceTypes?: EmploymentSourceTypeEnum[];
}
