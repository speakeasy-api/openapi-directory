import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Institiutional identification of a bank (Clearing System Member ID)
 *
 * @remarks
 * adapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2
 *
 */
export declare class InstitutionalIdentification2 extends SpeakeasyBase {
    clearingSystemIdCode: string;
    clearingSystemMemberId: string;
}
