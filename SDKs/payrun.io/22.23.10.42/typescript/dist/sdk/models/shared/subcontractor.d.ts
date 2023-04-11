import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The sub contractors' address
 */
export declare class SubContractorSubContractorAddress extends SpeakeasyBase {
    /**
     * The addresss' line 1
     */
    address1?: string;
    /**
     * The addresss' line 2
     */
    address2?: string;
    /**
     * The addresss' line 3
     */
    address3?: string;
    /**
     * The addresss' line 4
     */
    address4?: string;
    /**
     * The addresss' country
     */
    country?: string;
    /**
     * The addresss' postcode
     */
    postcode?: string;
}
/**
 * The sub contractors' bank account
 */
export declare class SubContractorSubContractorBankAccount extends SpeakeasyBase {
    /**
     * The bank accounts' account name
     */
    accountName?: string;
    /**
     * The bank accounts' account number
     */
    accountNumber?: string;
    /**
     * The bank accounts' branch name
     */
    branchName?: string;
    /**
     * The bank accounts' reference
     */
    reference?: string;
    /**
     * The bank accounts' sort code
     */
    sortCode?: string;
}
/**
 * The sub contractors' business type
 */
export declare enum SubContractorSubContractorBusinessTypeEnum {
    SoleTrader = "SoleTrader",
    Company = "Company",
    Partnership = "Partnership",
    Trust = "Trust"
}
/**
 * The sub contractors' pay frequency
 */
export declare enum SubContractorSubContractorPayFrequencyEnum {
    Monthly = "Monthly",
    Weekly = "Weekly"
}
/**
 * The sub contractors' payment method
 */
export declare enum SubContractorSubContractorPaymentMethodEnum {
    NotSet = "NotSet",
    Cash = "Cash",
    Cheque = "Cheque",
    Bacs = "BACS",
    FasterPayments = "FasterPayments",
    Other = "Other"
}
/**
 * The sub contractors' region
 */
export declare enum SubContractorSubContractorRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}
/**
 * The sub contractors' taxation status
 */
export declare enum SubContractorSubContractorTaxationStatusEnum {
    Unmatched = "Unmatched",
    Net = "Net",
    Gross = "Gross"
}
/**
 * The sub contractors' territory
 */
export declare enum SubContractorSubContractorTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}
export declare class SubContractorSubContractor extends SpeakeasyBase {
    /**
     * The sub contractors' address
     */
    address?: SubContractorSubContractorAddress;
    /**
     * The sub contractors' bank account
     */
    bankAccount?: SubContractorSubContractorBankAccount;
    /**
     * The sub contractors' business type
     */
    businessType?: SubContractorSubContractorBusinessTypeEnum;
    /**
     * The sub contractors' company name
     */
    companyName?: string;
    /**
     * The sub contractors' company registration number
     */
    companyRegistrationNumber?: string;
    /**
     * The sub contractors' deactivated
     */
    deactivated?: boolean;
    /**
     * The sub contractors' effective date
     */
    effectiveDate?: Date;
    /**
     * The sub contractors' first name
     */
    firstName?: string;
    /**
     * The sub contractors' initials
     */
    initials?: string;
    /**
     * The sub contractors' last name
     */
    lastName?: string;
    /**
     * The sub contractors' meta data
     */
    metaData?: Record<string, any>;
    /**
     * The sub contractors' middle name
     */
    middleName?: string;
    /**
     * The sub contractors' next revision date
     */
    nextRevisionDate?: Date;
    /**
     * The sub contractors' ni number
     */
    niNumber?: string;
    /**
     * The sub contractors' partnership name
     */
    partnershipName?: string;
    /**
     * The sub contractors' partnership unique tax reference
     */
    partnershipUniqueTaxReference?: string;
    /**
     * The sub contractors' pay frequency
     */
    payFrequency?: SubContractorSubContractorPayFrequencyEnum;
    /**
     * The sub contractors' payment method
     */
    paymentMethod?: SubContractorSubContractorPaymentMethodEnum;
    /**
     * The sub contractors' region
     */
    region?: SubContractorSubContractorRegionEnum;
    /**
     * The sub contractors' revision
     */
    revision?: number;
    /**
     * The sub contractors' taxation status
     */
    taxationStatus?: SubContractorSubContractorTaxationStatusEnum;
    /**
     * The sub contractors' telephone
     */
    telephone?: string;
    /**
     * The sub contractors' territory
     */
    territory?: SubContractorSubContractorTerritoryEnum;
    /**
     * The sub contractors' title
     */
    title?: string;
    /**
     * The sub contractors' trading name
     */
    tradingName?: string;
    /**
     * The sub contractors' unique tax reference
     */
    uniqueTaxReference?: string;
    /**
     * The sub contractors' vat registered
     */
    vatRegistered?: boolean;
    /**
     * The sub contractors' vat registration number
     */
    vatRegistrationNumber?: string;
    /**
     * The sub contractors' verification date
     */
    verificationDate?: Date;
    /**
     * The sub contractors' verification number
     */
    verificationNumber?: string;
    /**
     * The sub contractors' works number
     */
    worksNumber?: string;
}
/**
 * The sub contractor object.
 */
export declare class SubContractor extends SpeakeasyBase {
    subContractor?: SubContractorSubContractor;
}
