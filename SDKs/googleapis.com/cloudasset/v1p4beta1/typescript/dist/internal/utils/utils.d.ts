import "reflect-metadata";
export declare const SerializationMethodToContentType: Record<string, string>;
export interface PropInfo {
    key: string | symbol;
    type: any;
    elemType: any;
    elemDepth: number;
}
export declare class SpeakeasyBase {
    constructor(payload?: Record<string | symbol, unknown>);
}
export declare class ParamDecorator {
    Style: string;
    Explode: boolean;
    ParamName: string;
    Serialization?: string;
    DateTimeFormat?: string;
    constructor(Style: string, Explode: boolean, ParamName: string, Serialization?: string, DateTimeFormat?: string);
}
export declare function SpeakeasyMetadata<T extends SpeakeasyBase = Record<string | symbol, unknown>>(params?: {
    data?: string;
    elemType?: {
        new (): T;
    };
    elemDepth?: number;
}): PropertyDecorator;
export declare function templateUrl(stringWithParams: string, params: Record<string, string>): string;
export declare function generateURL(serverURL: string, path: string, pathParams: any, globals?: any): string;
export declare function parseParamDecorator(ann: string, fName: string, defaultStyle: string, defaultExplode: boolean): ParamDecorator;
export declare function isStringRecord(obj: any): obj is Record<string, string>;
export declare function isNumberRecord(obj: any): obj is Record<string, number>;
export declare function isBooleanRecord(obj: any): obj is Record<string, boolean>;
export declare function isEmpty(value: any): boolean;
export declare function convertIfDateObjectToISOString(value: any, dateTimeFormat?: string): any;
export declare function encodeAndConvertPrimitiveVal(value: any, dateTimeFormat?: string): any;
export declare function objectToClass<T>(value: T, klass?: any, elemDepth?: number): any;
export declare function getResFieldDepth(res: any): number;
export declare function populateFromGlobals(value: any, fieldName: string, paramType: string, globals: any): any;
