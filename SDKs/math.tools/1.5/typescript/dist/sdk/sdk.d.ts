import { BaseConversion } from "./baseconversion";
import { NumberChecks } from "./numberchecks";
import { NumberFacts } from "./numberfacts";
import { NumberGeneration } from "./numbergeneration";
import { NumberOfTheDay } from "./numberoftheday";
import { NumberSystemsConversion } from "./numbersystemsconversion";
import { Pi } from "./pi";
import { Prime } from "./prime";
import { Spell } from "./spell";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.math.tools", "http://api.math.tools"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * All about Numbers. REST access with json/xml/jsonp result support. Below is the documentation for the Numbers API. You can try them out right here. Find more information and subscribe at [math.tools](https://math.tools/api/numbers/)
 *
 * @remarks
 *
 */
export declare class SDK {
    /**
     * Convert from one base to another. This API is free (rate limited).
     */
    baseConversion: BaseConversion;
    /**
     * Check Property of a given number.
     */
    numberChecks: NumberChecks;
    /**
     * Get random interesting fact about a given number.
     */
    numberFacts: NumberFacts;
    /**
     * Generate Random and interesting numbers.
     */
    numberGeneration: NumberGeneration;
    /**
     * Convert from one number system to another.
     */
    numberSystemsConversion: NumberSystemsConversion;
    /**
     * Number of the day. This API is free (rate limited).
     */
    numberOfTheDay: NumberOfTheDay;
    /**
     * Digits of PI and more.This API is free (rate limited).
     */
    pi: Pi;
    /**
     * Things to do with Prime numbers
     */
    prime: Prime;
    /**
     * Spell out a number ordinal, cardinal or currency. This API is free (rate limited).
     */
    spell: Spell;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
