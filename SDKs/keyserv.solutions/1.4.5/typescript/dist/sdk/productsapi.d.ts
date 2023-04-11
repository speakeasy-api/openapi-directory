import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductsApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    productsApiCount(req: any, config?: AxiosRequestConfig): Promise<operations.ProductsApiCountResponse>;
    productsApiDeleteProduct(req: operations.ProductsApiDeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.ProductsApiDeleteProductResponse>;
    productsApiDeleteProduct2(req: operations.ProductsApiDeleteProduct2Request, config?: AxiosRequestConfig): Promise<operations.ProductsApiDeleteProduct2Response>;
    productsApiFind(req: operations.ProductsApiFindRequest, config?: AxiosRequestConfig): Promise<operations.ProductsApiFindResponse>;
    productsApiList(req: operations.ProductsApiListRequest, config?: AxiosRequestConfig): Promise<operations.ProductsApiListResponse>;
    productsApiPatchProduct(req: any, config?: AxiosRequestConfig): Promise<operations.ProductsApiPatchProductResponse>;
    productsApiPatchProduct2(req: any, config?: AxiosRequestConfig): Promise<operations.ProductsApiPatchProduct2Response>;
    productsApiSave(req: any, config?: AxiosRequestConfig): Promise<operations.ProductsApiSaveResponse>;
}
