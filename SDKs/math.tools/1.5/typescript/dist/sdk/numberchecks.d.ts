import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Check Property of a given number.
 */
export declare class NumberChecks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Checks whether a given number is a cube number or not.
     */
    getNumbersIsCube(req: operations.GetNumbersIsCubeRequest, security: operations.GetNumbersIsCubeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersIsCubeResponse>;
    /**
     * Checks whether a given number is a palindrome number or not.
     */
    getNumbersIsPalindrome(req: operations.GetNumbersIsPalindromeRequest, security: operations.GetNumbersIsPalindromeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersIsPalindromeResponse>;
    /**
     * Checks whether a given number is a square number or not.
     */
    getNumbersIsSquare(req: operations.GetNumbersIsSquareRequest, security: operations.GetNumbersIsSquareSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersIsSquareResponse>;
    /**
     * Checks whether a given number is a triangle number or not.
     */
    getNumbersIsTriangle(req: operations.GetNumbersIsTriangleRequest, security: operations.GetNumbersIsTriangleSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersIsTriangleResponse>;
    /**
     * Checks whether a given number is a known fermat prime number or not.
     */
    getNumbersPrimeIsFermatPrime(req: operations.GetNumbersPrimeIsFermatPrimeRequest, security: operations.GetNumbersPrimeIsFermatPrimeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsFermatPrimeResponse>;
    /**
     * Checks whether a given number is a known fibonacci prime number or not.
     */
    getNumbersPrimeIsFibonacciPrime(req: operations.GetNumbersPrimeIsFibonacciPrimeRequest, security: operations.GetNumbersPrimeIsFibonacciPrimeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsFibonacciPrimeResponse>;
    /**
     * Checks whether a given number is a known mersenne prime number or not.
     */
    getNumbersPrimeIsMersennePrime(req: operations.GetNumbersPrimeIsMersennePrimeRequest, security: operations.GetNumbersPrimeIsMersennePrimeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsMersennePrimeResponse>;
    /**
     * Checks whether a given number is a known partition prime number or not.
     */
    getNumbersPrimeIsPartitionPrime(req: operations.GetNumbersPrimeIsPartitionPrimeRequest, security: operations.GetNumbersPrimeIsPartitionPrimeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsPartitionPrimeResponse>;
    /**
     * Checks whether a given number is a known pell prime number or not.
     */
    getNumbersPrimeIsPellPrime(req: operations.GetNumbersPrimeIsPellPrimeRequest, security: operations.GetNumbersPrimeIsPellPrimeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsPellPrimeResponse>;
    /**
     * Checks whether a given number is a perfect number or not.
     */
    getNumbersPrimeIsPerfect(req: operations.GetNumbersPrimeIsPerfectRequest, security: operations.GetNumbersPrimeIsPerfectSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsPerfectResponse>;
    /**
     * Checks whether a given number is a known prime number or not.
     */
    getNumbersPrimeIsPrime(req: operations.GetNumbersPrimeIsPrimeRequest, security: operations.GetNumbersPrimeIsPrimeSecurity, config?: AxiosRequestConfig): Promise<operations.GetNumbersPrimeIsPrimeResponse>;
}
