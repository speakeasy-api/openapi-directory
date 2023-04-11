import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The GymDTO Class.
 *
 * @remarks
 * Contains relevant fields of Gym DTO by masking actual Gym entity's fields in application.
 *
 */
export declare class GymDTO extends SpeakeasyBase {
    externalGymNumber?: number;
    gymId?: number;
    gymName?: string;
    location?: string;
}
