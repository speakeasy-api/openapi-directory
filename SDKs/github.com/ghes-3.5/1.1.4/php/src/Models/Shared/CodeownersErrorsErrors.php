<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CodeownersErrorsErrors
{
    /**
     * The column number where this errors occurs.
     * 
     * @var int $column
     */
	#[\JMS\Serializer\Annotation\SerializedName('column')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $column;
    
    /**
     * The type of error.
     * 
     * @var string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $kind;
    
    /**
     * The line number where this errors occurs.
     * 
     * @var int $line
     */
	#[\JMS\Serializer\Annotation\SerializedName('line')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $line;
    
    /**
     * A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting).
     * 
     * @var string $message
     */
	#[\JMS\Serializer\Annotation\SerializedName('message')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $message;
    
    /**
     * The path of the file where the error occured.
     * 
     * @var string $path
     */
	#[\JMS\Serializer\Annotation\SerializedName('path')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $path;
    
    /**
     * The contents of the line where the error occurs.
     * 
     * @var ?string $source
     */
	#[\JMS\Serializer\Annotation\SerializedName('source')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $source = null;
    
    /**
     * Suggested action to fix the error. This will usually be `null`, but is provided for some common errors.
     * 
     * @var ?string $suggestion
     */
	#[\JMS\Serializer\Annotation\SerializedName('suggestion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $suggestion = null;
    
	public function __construct()
	{
		$this->column = 0;
		$this->kind = "";
		$this->line = 0;
		$this->message = "";
		$this->path = "";
		$this->source = null;
		$this->suggestion = null;
	}
}
