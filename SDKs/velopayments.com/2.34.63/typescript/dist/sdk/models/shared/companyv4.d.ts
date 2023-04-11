import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompanyV4 extends SpeakeasyBase {
    name: string;
    operatingName?: string;
    /**
     * Company Tax Id must be between 6 and 30 characters long
     */
    taxId?: string;
}
