import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationValue } from "./authorizationvalue";
/**
 * Configuration for building the client library
 */
export declare class GeneratorInput extends SpeakeasyBase {
    authorizationValue?: AuthorizationValue;
    openAPIUrl?: string;
    options?: Record<string, string>;
    spec?: Record<string, any>;
}
