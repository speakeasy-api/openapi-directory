import { SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameOut } from "./firstlastnameout";
/**
 * Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order.
 */
export declare enum PersonalNameParsedOutNameParserTypeEnum {
    Fn1Ln1 = "FN1LN1",
    Ln1Fn1 = "LN1FN1",
    Fn1Ln2 = "FN1LN2",
    Ln2Fn1 = "LN2FN1",
    Fn1LNx = "FN1LNx",
    LNxFn1 = "LNxFN1",
    Fn2Ln1 = "FN2LN1",
    Ln1Fn2 = "LN1FN2",
    Fn2Ln2 = "FN2LN2",
    Ln2Fn2 = "LN2FN2",
    Fn2LNx = "FN2LNx",
    LNxFn2 = "LNxFN2",
    FNxLn1 = "FNxLN1",
    Ln1FNx = "LN1FNx",
    FNxLn2 = "FNxLN2",
    Ln2FNx = "LN2FNx",
    FNxLNx = "FNxLNx",
    LNxFNx = "LNxFNx"
}
/**
 * Second best alternative parsing. Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order.
 */
export declare enum PersonalNameParsedOutNameParserTypeAltEnum {
    Fn1Ln1 = "FN1LN1",
    Ln1Fn1 = "LN1FN1",
    Fn1Ln2 = "FN1LN2",
    Ln2Fn1 = "LN2FN1",
    Fn1LNx = "FN1LNx",
    LNxFn1 = "LNxFN1",
    Fn2Ln1 = "FN2LN1",
    Ln1Fn2 = "LN1FN2",
    Fn2Ln2 = "FN2LN2",
    Ln2Fn2 = "LN2FN2",
    Fn2LNx = "FN2LNx",
    LNxFn2 = "LNxFN2",
    FNxLn1 = "FNxLN1",
    Ln1FNx = "LN1FNx",
    FNxLn2 = "FNxLN2",
    Ln2FNx = "LN2FNx",
    FNxLNx = "FNxLNx",
    LNxFNx = "LNxFNx"
}
/**
 * A origined name.
 */
export declare class PersonalNameParsedOut extends SpeakeasyBase {
    /**
     * First / last name structure corresponding to the most likely parsing.
     */
    firstLastName?: FirstLastNameOut;
    id?: string;
    /**
     * The input name
     */
    name?: string;
    /**
     * Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order.
     */
    nameParserType?: PersonalNameParsedOutNameParserTypeEnum;
    /**
     * Second best alternative parsing. Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order.
     */
    nameParserTypeAlt?: PersonalNameParsedOutNameParserTypeAltEnum;
    /**
     * Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
}
