<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateUsageChargeRequestBodyUsageCharge
{
    /**
     * 従量課金の発生理由。使用可能文字は ASCII, JIS X 0208, JIS X 0201, JIS X 0212に限ります。（[デベロッパー](https://developer.shop-pro.jp) ページに掲載される各アプリの「従量課金」一覧で登録内容を確認できます。カラーミーショップ側がこのパラメータを参照して課金の内容を確認することがあります。）
     * 
     * @var string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $description;
    
    /**
     * ポイント数（税抜）。100 円以上 100 万円以下が指定可能。このポイントに消費税を加算してショップオーナーに請求します。
     * 
     * @var int $point
     */
	#[\JMS\Serializer\Annotation\SerializedName('point')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $point;
    
	public function __construct()
	{
		$this->description = "";
		$this->point = 0;
	}
}
