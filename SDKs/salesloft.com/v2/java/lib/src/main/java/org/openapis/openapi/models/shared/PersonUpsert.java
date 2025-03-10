/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * PersonUpsert - Success
 */
public class PersonUpsert {
    
    public Person person;

    public PersonUpsert withPerson(Person person) {
        this.person = person;
        return this;
    }
    
    /**
     * The type of upsert. One of: create, update
     */
    
    public String upsertType;

    public PersonUpsert withUpsertType(String upsertType) {
        this.upsertType = upsertType;
        return this;
    }
    
    public PersonUpsert(){}
}
