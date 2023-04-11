import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceCode } from "./devicecode";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class CreateDeviceCodeRequest extends SpeakeasyBase {
    deviceCode: DeviceCode;
    /**
     * A unique string that identifies this CreateDeviceCode request. Keys can
     *
     * @remarks
     * be any valid string but must be unique for every CreateDeviceCode request.
     *
     * See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotencyKey: string;
}
