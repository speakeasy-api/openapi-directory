package operations

type ChangePasswordPathParams struct {
	ShopperID string `pathParam:"style=simple,explode=false,name=shopperId"`
}

type ChangePasswordRequest struct {
	PathParams ChangePasswordPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type ChangePasswordResponse struct {
	ContentType   string
	Error         *interface{}
	PasswordError *interface{}
	ShopperID     *interface{}
	StatusCode    int64
}
