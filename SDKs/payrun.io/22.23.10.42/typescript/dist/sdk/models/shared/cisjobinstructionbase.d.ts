import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cis job instruction bases' employer
 */
export declare class CisJobInstructionBaseCisJobInstructionBaseEmployer extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
export declare class CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The cis job instruction bases' sub contractors
 */
export declare class CisJobInstructionBaseCisJobInstructionBaseSubContractor extends SpeakeasyBase {
    subContractor?: CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor[];
}
export declare class CisJobInstructionBaseCisJobInstructionBase extends SpeakeasyBase {
    /**
     * The cis job instruction bases' employer
     */
    employer?: CisJobInstructionBaseCisJobInstructionBaseEmployer;
    /**
     * The cis job instruction bases' holding date
     */
    holdingDate?: Date;
    /**
     * The cis job instruction bases' sub contractors
     */
    subContractors?: CisJobInstructionBaseCisJobInstructionBaseSubContractor;
}
/**
 * The the CIS job instruction object.
 */
export declare class CisJobInstructionBase extends SpeakeasyBase {
    cisJobInstructionBase?: CisJobInstructionBaseCisJobInstructionBase;
}
