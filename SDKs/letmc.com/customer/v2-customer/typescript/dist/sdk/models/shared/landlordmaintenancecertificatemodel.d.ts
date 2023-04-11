import { SpeakeasyBase } from "../../../internal/utils";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";
/**
 * Maintenance Certificate
 */
export declare class LandlordMaintenanceCertificateModel extends SpeakeasyBase {
    /**
     * Due
     */
    due?: Date;
    /**
     * Files
     */
    files?: LettingsLandlordDocument[];
    /**
     * Status.
     */
    status?: string;
    /**
     * Type
     */
    type?: string;
}
